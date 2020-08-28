// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.value = null;
    this.isKeyword = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let charArray = word.split('');
    let currNode = this;
    for(let c of charArray){
        if(currNode[c]){
            currNode = currNode[c];
        }else{
            let newNode = new Trie();
            newNode.value = c;
            currNode[c] = newNode;
            currNode = newNode; 
        }
    }
    currNode.isKeyword = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let charArray = word.split('');
    let currNode = this;
    for(let c of charArray){
        if(!currNode[c]){
            return false;
        }
        currNode = currNode[c];
    }
    return currNode.isKeyword;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let charArray = prefix.split('');
    let currNode = this;
    for(let c of charArray){
        if(!currNode[c]){
            return false;
        }
        currNode = currNode[c];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");   
console.log(trie.search("app"));     // returns true
console.log(trie.search("apple"));   // returns true
console.log(trie.startsWith("apple"));   // returns true