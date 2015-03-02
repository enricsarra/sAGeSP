
// Enric's first express code, 20150228.

// Estrucura de fitxers i directoris
//    app.js
//    <pagines>
//        index.htm
//        <css>
//            enric.css

// To run it, do:
//  a) start server with "node app.js"
//  b) start client with a browser pointing at "http://localhost:8888/"

// En aquest directori hem de fer:
//    *) gpm init - crea directori .git
//    *) npm init - crea package.json
// npm install express --save - installs "express" module into "node_modules" directory <<<<<<<< *******
//    *) npm install morgan --save - writes modules into "node_modules" directory
//    *) create .gitignore file from https://github.com/github/gitignore/blob/master/Node.gitignore -> include "node_modules" in it

	var express    = require( 'express' ) ;         // web framework for node.js - http://expressjs.com/api.html
	var http       = require( 'http' ) ;            // required to use the HTTP server - http://nodejs.org/api/http.html
	var logger     = require( 'morgan' ) ;          // logging middleware - https://github.com/expressjs/morgan

	var app = express() ;                           // instantiate Express and assign our app variable to it
	app.set( 'port', process.env.PORT || 8888 ) ;   // set "port" value for our app
	app.use( logger( "dev" ) ) ;                    // https://github.com/expressjs/morgan - tiny (minimal), dev (developer), common (apache)

	var staticPath    =  __dirname + '/pagines';
	var staticOptions = { index: 'index.htm' };                     // provide "index.htm" instead of the default "index.html"
	app.get( '/*', express.static( staticPath, staticOptions ) ) ;  // configure express options
	
	var myVersio   = "v 1.1.a" ;                    // identify our code

// create our http server and launch it

	http.createServer( app ).listen( app.get( 'port' ), function() {
		console.log( "Enric's express server " + myVersio + " listening on port [" + app.get( "port" ) + "]." ) ;
	} ) ; // create server
