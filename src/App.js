import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '960122',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '이순신',
  'birthday': '931123',
  'gender': '남자',
  'job': '고등학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '킴세종',
  'birthday': '940501',
  'gender': '남자',
  'job': '회사원'
}]

class App extends React.Component {
  render() {

    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer 
              key={c.id}
              id={c.id}
              img={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
