async function themes () {
  const { assetDir } = this.bajoWebStatic.helper
  return [{
    name: 'adminlte3',
    framework: 'bootstrap4',
    description: 'Admin LTE 3',
    scriptMerge: true,
    script: [
      `${assetDir('bajoWebMpaAdminlte')}/adminlte-3.2/js/adminlte.min.js`
    ],
    css: [
      `${assetDir('bajoWebMpaAdminlte')}/adminlte-3.2/css/adminlte.min.css`
    ]
  }]
}

export default themes
