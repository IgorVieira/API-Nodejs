import express from 'express'
import consign from 'consign'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'




const app = express()



app.use(cookieParser());
  app.use(session(
    {
      secret:'The Machine',
      resave:true,
      saveUninitialized:true
    }
  ));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(require('method-override')());


app.set('port', (process.env.PORT || 3000))

consign({cwd:'server', verbose:false})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)



export default app;

