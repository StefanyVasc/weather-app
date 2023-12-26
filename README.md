### Tech Stack
- Vite
- React
- React Router DOM
- Sass
- Axios
- Phosphor icons
- Date FNS

### Requisitos
- As cidades devem ser: Dallol(NG), Fairbanks(US), Londres(GB), Recife(BR), Vancouver(CA), Yakutsk(RU)
- Fidelidade ao layout enviado (estamos enviando o layout mobile e desktop)
- Responsividade. 
- Implementação de testes unitários
- Framework Javascript a sua escolha. Ex: React, VueJS, Angular.
- O projeto seja publicado em: https://www.netlify.com/

Desejáveis:
  - Mobile first
  - Fazer uso de pré-processadores CSS

Observações:
  - Você deve usar o ícone do layout que melhor se encaixa em cada condição climática
  - Considere os horários 3:00, 9:00, 15:00 e 21:00 para a definição das temperaturas de Dawn, Morning, Afternoon, Night

Diferenciais:
  - Rodar a aplicação fazendo o uso de um container do Docker


### Principais dificuldades:
- lidar com `.env` e erro de `process`. O vite usa a nomeclatura `VITE_` nas variaveis ambientes e elas devem ser acessadas da seguinte forma `import.meta.env.VITE_SUA_VARIAVEL`. No enviroments do Netlify as variaveis devem ser setadas do mesmo modo.

- arquivo de com funções auxiliares pra formatar os dados vindo da api, o typescript deixou bem complicado e verboso.

- retorno dos dados da api
  - como pegar o clima relacionado a hora atual.

- mudar esquema de cores de acordo com a rota

https://www.weatherapi.com/api-explorer.aspx#future