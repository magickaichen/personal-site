import React, { Component } from "react";
import { Header, Segment, Icon } from "semantic-ui-react";
import { Button, Divider, Form, Grid, List } from "semantic-ui-react";
import { Input, TextArea } from "semantic-ui-react";

const styles = {
  segment: {
    textAlign: 'left'
  }
}

function ContactPage(props) {
  return (
    <React.Fragment>
      <Header 
        as="h2" 
        content="Contact"
        subheader="Feel free to stay in touch!"
      />
      <Segment textAlign='left'>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Header
            content='Send me a message'/>
            <Form>
              <Form.Field required
                id='form-input-control-name'
                control={Input}
                label='Name'
                placeholder='Your name'
              />
              <Form.Field required
                id='form-textarea-control-message'
                control={TextArea}
                label='Message'
                placeholder='Anything you want to let me know!'
              />
              <Button content="Send!" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="top">
            <Header
            content='Contact me via'/>
            <List size='large'>
              <List.Item>
                <Icon name='mail' />
                <List.Content>
                  <List.Header>Email</List.Header>
                  <List.Description>
                    <a href='mailto:alonsoxkc134@gmail.com'>alonsoxkc134@gmail.com</a>
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name='linkedin' />
                <List.Content>
                  <List.Header>LinkedIn InMail</List.Header>
                  <List.Description>
                  <a href='https://www.linkedin.com/in/magickaichen/'>Mike Xiao</a>
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name='github' />
                <List.Content>
                  <List.Header>GitHub</List.Header>
                  <List.Description>
                    <a href='https://github.com/magickaichen/'>magickaichen</a>
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </React.Fragment>
  );
}

export default ContactPage;
