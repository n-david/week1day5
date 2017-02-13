// process.argv.slice(2).forEach(function (arg) {
//   var spent = Number(arg);

//   var popMoney = spent / 2;
//   if (popMoney % 1 !== 0) {
//     var popMoneyRemain = (popMoney % 1).toFixed(2);
//   }
//   var popBottles = popMoney / 2;
//   if (popBottles % 1 !== 0) {
//     var popBottlesRemain = popBottles % 1;
//   }
//   var popBottleCaps = popMoney / 4;
//   if (popBottleCaps % 1 !== 0) {
//     var popBottleCapsRemain = popBottleCaps % 1;
//   }
//   var popTotal = popMoney + popBottles + popBottleCaps;
//   console.log(`${popTotal} bottles of pop can be obtained with $${spent}:\n${popMoney} were purchased\n${popBottles} from recycling bottles\n${popBottleCaps} from recycling bottle caps\n`);
//   if (!!popMoneyRemain) {
//     console.log(`$${popMoneyRemain} left over`);
//   }
//   if (!!popBottlesRemain) {
//     console.log(`${popBottlesRemain} bottles left over`);
//   }
//   if (!!popBottleCapsRemain) {
//     console.log(`${popBottleCapsRemain} bottle caps left over`);
//   }
// });

process.argv.slice(2).forEach(function (arg) {
  var spent = Number(arg);
  var bottlesObject = {money: 0, bottles: 0, caps: 0};
  var total = 0;
  for (var item in bottlesObject) {
    spent /= 2;
    bottlesObject[item] += spent;
    total += spent;
    console.log(Math.floor(bottlesObject[item]) + ' pops from ' + item);
    if (spent % 1 !== 0) {
      console.log(spent % 1 + ' ' + item + ' remaining');
    }
  }
  // arr.forEach(function(b) { console.log(`${b} bottles`);});
  console.log('\n' + Math.floor(total) + ' pops in total can be obtained with $' + arg + ' dollars');
});
