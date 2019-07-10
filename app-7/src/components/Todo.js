// import React, {Component} from "react";

// export default class Todo extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.todoArr.map(
//                     thingToDo => (
//                         <h4 key={thingToDo}>{thingToDo}</h4>
//                     )
//                 )}
//             </div>
//         )
//     }
// }

import React, {Component} from 'react';

export default class Todo extends Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}