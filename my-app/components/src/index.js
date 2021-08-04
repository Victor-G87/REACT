import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
          <CommentDetail
          author='Sam'
          timeAgo='Today at 4:14PM'
          userComment='is that it...'
          avatar={faker.image.avatar()}
          />
          <CommentDetail
           author='Alex'
           timeAgo='Today at 7:42PM'
           userComment='ok'
           avatar={faker.image.avatar()}
          />
          <CommentDetail
           author='Jane'
           timeAgo='Today at 9:34PM'
           userComment='this is amazing'
           avatar={faker.image.avatar()}
          />
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))

