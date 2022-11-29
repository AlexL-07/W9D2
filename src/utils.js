const Util = {
    inherits: function inherits(childClass, parentClass){

    },
    
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
      },
      // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
      },

    dist([x_1, y_1], [x_2, y_2]) {
        return Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)
      },

    findNorm([x_1, y_1]) {
        return Dist([0, 0], [x_1, y_1])
    }
};

module.exports = Util;