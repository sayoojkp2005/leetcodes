/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
   let nwadd= address.replaceAll(".","[.]");
            return nwadd;
    }
