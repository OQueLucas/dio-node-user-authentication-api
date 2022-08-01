import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/users.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(usersRoute)

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'sucesso total!'})
})

// Inicialização do servidor
app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000!')
})