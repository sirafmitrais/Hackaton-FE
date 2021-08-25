import React from 'react'

import {Row, Col, Form} from 'react-bootstrap'

function auth() {


    return (
      <React.Fragment>
          <Row>
              <Col>
                <div className="container">
                    <Form>
                        <Form.Group>
                            <Form.Control className="form" name="username">

                            </Form.Control>
                        </Form.Group>
                    </Form>
                    
                </div>
              </Col>
          </Row>
      </React.Fragment>
    )
}

export default auth
