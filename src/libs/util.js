let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'hrbustOJ';
    window.document.title = title;
};

export default util;