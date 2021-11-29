import React from "react";
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;
const nom = localStorage.getItem("nom") ;
     const prenom = localStorage.getItem("prenom") ;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'Avis envoyés' : 'Avis envoyé'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} placeholder="Exprimez votre expérience avec Bin Idik"/>
    </Form.Item>
    <Form.Item>
      <Button style={{marginLeft:"65%" }} htmlType="submit" loading={submitting} onClick={onSubmit} type="primary" shape="round"  danger >
        Envoyer
      </Button>
    </Form.Item>
  </>
);

class Comments extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: nom+' '+prenom,
            avatar:  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{nom.toUpperCase().charAt(0)}{prenom.charAt(0).toUpperCase()}</Avatar>,
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    
     console.log(nom);

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{nom.toUpperCase().charAt(0)}{prenom.charAt(0).toUpperCase()}</Avatar>}
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}
export default Comments;