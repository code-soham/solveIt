try {
  var ans = document.getElementsByClassName("col_gen")[0].innerHTML;
  console.log(ans);

  var choices = document.getElementsByClassName("box");
  let opts = [];
  for (let i = 0; i < choices.length; i++) {
    opts.push(choices[i].style.backgroundColor);
    opts[i] = opts[i].replace(/\s/g, "");
  }
  console.log(opts);
  let res;
  for (let i = 0; i < opts.length; i++) {
    if (ans == opts[i]) {
      choices[i].click();
      break;
    }
  }
} catch (err) {
  console.log(err);
}
