import React, { useState } from 'react';

// class Categories extends React.Component {
// state={
//   activeItem: 0

// }

// onSelectItem = (index )=>{
//   this.setState({
//     activeItem: index,
//   });
// }

//   render() {

// const {items , onClickItem} = this.props;

//     return (
//       <div className='categories'>
//         <ul>
//           <li >Все</li>
//           {items.map((name, index) => (
//             <li
//              className = {this.state.activeItem === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({ items, onClickItem }) {
  // const [state, setState]  = useState(initialState)

  const [activeItem, setActiveItem] = React.useState(null);



  const onSelectItem = (index) => {
    setActiveItem(index);

  };



  return (
    <div className='categories'>
      <ul>

        <li onClick={() => onSelectItem(null)}
          className={activeItem === null ? 'active' : ''
          }>Все</li>

        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
