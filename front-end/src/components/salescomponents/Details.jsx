import React from 'react'; // , { useState }

export default function Details() {
  return (
    <div>
      Detalhes do Produto:
      <div>
        <div
          // Header Lista
          className="HeaderRequestList"
        >
          <div>
            Pedido
          </div>
          <div>
            Data
          </div>
          <div>
            Status
          </div>
          <div>
            Mudar Info
          </div>
        </div>
        <div
          // Lista completa
          className="RequestList"
        >
          Lista
        </div>
      </div>
    </div>
  )
}
