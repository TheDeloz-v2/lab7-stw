module.exports = function (api) {
    api.cache(true);
  
    const presets = [ "@babel/preset-env" ];
    const plugins = [ "@babel/plugin-transform-arrow-functions" //transforma las funciones flecha a funciones normales 
                        ,["@babel/plugin-transform-runtime",
                            {
                            "absoluteRuntime": false,
                            "corejs": false,
                            "helpers": true,
                            "regenerator": true,
                            "version": "7.0.0-beta.0"
                            }
                        ] //permite la reutilización del código de ayuda inyectado por Babel para ahorrar en el tamaño del código (No se encuenta en el preset-env)
                        ,["@babel/plugin-proposal-decorators", { "legacy": true }] //permite usar decoradores en clases (No se encuenta en el preset-env)
                        ,"@babel/plugin-syntax-dynamic-import" //permite usar import() para cargar módulos de forma dinámica
                        ,"@babel/plugin-transform-jscript" //permite usar la sintaxis de JScript
                        ,"@babel/plugin-proposal-private-property-in-object" //permite usar la sintaxis de propiedades privadas
                    ];
  
    return {
      presets,
      plugins
    };
  }