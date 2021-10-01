// Import stylesheets
import './style.css';

// Write Javascript code!

const products = [
  [
    {
      title: 'hamburguesa',
      price: 450,
      thumbnail:
        'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 1,
    },
    {
      title: 'pizza',
      price: 800,
      thumbnail:
        'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 2,
    },
    {
      title: 'papas fritas',
      price: 300,
      thumbnail:
        'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 3,
    },
    {
      title: 'empanadas',
      price: 920,
      thumbnail:
        'https://images.pexels.com/photos/6535195/pexels-photo-6535195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      id: 4,
    },
    {
      title: 'lasaña',
      price: 750,
      thumbnail:
        'https://images.pexels.com/photos/5949900/pexels-photo-5949900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 5,
    },
    {
      title: 'カルボナーラ',
      price: 850,
      thumbnail:
        'https://images.pexels.com/photos/5710170/pexels-photo-5710170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 6,
    },
    {
      title: '握り寿司',
      price: 1600,
      thumbnail:
        'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 7,
    },
  ],
];

const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 3000);
});

useEffect(() => {
  if (!result) {
    task
      .then((res, err) => {
        if (err) console.log(err);
        setResult(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log('finalizado'));
  }
  console.log(result);
}, [result]);

// const getItems = async () => {
//   try{
//     let result = await
//   } catch (error){
//     console.log(error)
//   }
// }

task.then((resp) => console.log(resp));

//inyecto mi html acá
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
