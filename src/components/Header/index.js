import React from 'react'

function Header() {
    return(
        <header className="toolbar toolbar-header image-toolbar">
        <div className="toolbar-actions">
            <div className="btn-group">
              <button id="open-directory" className="btn btn-default">
                <span className="icon icon-folder icon-text"></span>
                Abrir ubicación
              </button>
            </div>
            <button id="save-button" className="btn btn-default pull-right">
              <span className="icon icon-download icon-text"></span>
              Guardar
            </button>
            <select id="filters" className="pull-right">
             <option value="normal" selected>normal</option>
             <option value="1977">1977</option>
             <option value="aden">aden</option>
             <option value="amaro">amaro</option>
             <option value="ashby">ashby</option>
             <option value="brannan">brannan</option>
             <option value="brooklyn">brooklyn</option>
             <option value="charmes">charmes</option>
             <option value="clarendon">clarendon</option>
             <option value="crema">crema</option>
             <option value="dogpatch">dogpatch</option>
             <option value="earlybird">earlybird</option>
             <option value="gingham">gingham</option>
             <option value="ginza">ginza</option>
             <option value="hefe">hefe</option>
             <option value="helena">helena</option>
             <option value="hudson">hudson</option>
             <option value="inkwell">inkwell</option>
             <option value="juno">juno</option>
             <option value="kelvin">kelvin</option>
             <option value="lark">lark</option>
             <option value="lofi">lofi</option>
             <option value="ludwig">ludwig</option>
             <option value="maven">maven</option>
             <option value="mayfair">mayfair</option>
             <option value="moon">moon</option>
             <option value="nashville">nashville</option>
             <option value="perpetua">perpetua</option>
             <option value="reyes">reyes</option>
             <option value="rise">rise</option>
             <option value="sierra">sierra</option>
             <option value="skyline">skyline</option>
             <option value="slumber">slumber</option>
             <option value="stinson">stinson</option>
             <option value="sutro">sutro</option>
             <option value="toaster">toaster</option>
             <option value="valencia">valencia</option>
             <option value="vesper">vesper</option>
             <option value="walden">walden</option>
             <option value="willow">willow</option>
             <option value="xpro2">xpro2</option>
            </select>
            <label className="pull-right filter-label">Filtros: </label>
        </div>
      </header>
    )
}

export default Header