// Given many words, words[i] has weight i.

// Design a class WordFilter that supports one function, WordFilter.f(String prefix, String suffix). It will return the word with given prefix and suffix with maximum weight. If no word exists, return -1.

// Examples:

// Input:
// WordFilter(["apple"])
// WordFilter.f("a", "e") // returns 0
// WordFilter.f("b", "") // returns -1

 

// Note:

//     words has length in range [1, 15000].
//     For each test case, up to words.length queries WordFilter.f may be made.
//     words[i] has length in range [1, 10].
//     prefix, suffix have lengths in range [0, 10].
//     words[i] and prefix, suffix queries consist of lowercase letters only.


/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    this.trie = new Trie();
    for(let i=0;i<words.length;i++){
        let word = words[i];
        let temp = '_'+word;
        this.trie.insert(temp, i);
        for(let j=0;j<word.length;j++){
            // console.log(word.substring(j)+temp);
            this.trie.insert(word.substring(j)+temp, i);
        }
    }
};

var Trie = function() {
    // this.value = null;
    // this.isKeyword = false;
    this.lastIndex = null;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word, index) {
    let charArray = word.split('');
    let currNode = this;
    for(let c of charArray){
        if(currNode[c]){
            currNode = currNode[c];
            currNode.lastIndex = index;
        }else{
            let newNode = new Trie();
            // newNode.value = c;
            newNode.lastIndex = index;
            currNode[c] = newNode;
            currNode = newNode; 
        }
    }
    // currNode.isKeyword = true;
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    let currNode = this.trie;
    if(suffix.length != 0){
        let charArray = suffix.split('');
        for(let c of charArray){
            if(!currNode[c]){
                return -1;
            }
            currNode = currNode[c];
        }
    }
    if(!currNode['_']){
        return -1;
    }
    currNode = currNode['_'];

    if(prefix.length != 0){
        let charArray = prefix.split('');
        for(let c of charArray){
            if(!currNode[c]){
                return -1;
            }
            currNode = currNode[c];
        }
    }
    return currNode.lastIndex;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */

var obj = new WordFilter(["apple",'pig','hug']);
console.log(obj.f('a','e'));
console.log(obj.f('b',''));
console.log(obj.f('p',''));
console.log(obj.f('','e'));
console.log(obj.f('','a'));
console.log(obj.f('','g'));
console.log(obj.f('a','g'));