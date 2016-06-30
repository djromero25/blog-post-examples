window.Total = {}

Total.view = function (ctrl) {
  return m('.total', [
    m('label', "Total: "),
    m('b', "$" + Total.calcPrice(attrs.discount, attrs.count))
  ])
}
