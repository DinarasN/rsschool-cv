function reverse(el) {
    el = el + "";
    return el.split("").reverse().join("");
}
        
console.log(reverse(123));
console.log(reverse(233));
console.log(reverse(535));
console.log(reverse(95034));

$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('collapse');

        
        $(this).toggleClass("active");
        
});