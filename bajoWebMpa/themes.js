async function themes () {
  const { assetsDir } = this.bajoWebStatic.helper
  return [{
    name: 'adminlte3',
    framework: 'bootstrap4',
    description: 'Admin LTE 3',
    scriptMerge: true,
    script: [
      `${assetsDir('bajoWebMpaAdminlte')}/adminlte-3.2/js/adminlte.min.js`
    ],
    css: [
      `${assetsDir('bajoWebMpaAdminlte')}/adminlte-3.2/css/adminlte.min.css`
    ]
  }]
}

export default themes
