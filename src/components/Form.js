import React from 'react';
import { Form, Button, Select, InputNumber, Card } from 'antd';
const { Option } = Select;

function Search({ setcamera, setdate, setrobot, onFinish }) {
  const [form] = Form.useForm();

  return (
    <Form
      layout='vertical'
      form={form}
      name='control-hooks'
      onFinish={onFinish}
    >
      <Form.Item name='robot' label='Robot'>
        <Select placeholder='Select a robot' allowClear>
          <Option
            key='c'
            text='Curiosity'
            value='curiosity'
            onClick={() => setrobot('curiosity')}
          >
            Curiosity
          </Option>
          <Option
            key='o'
            text='Opportunity'
            value='opportunity'
            onClick={() => setrobot('opportunity')}
          >
            Opportunity
          </Option>
          <Option
            key='s'
            text='Spirit'
            value='spirit'
            onClick={() => setrobot('spirit')}
          >
            Spirit
          </Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.robot !== currentValues.robot
        }
      >
        {({ getFieldValue }) =>
          getFieldValue('robot') === 'curiosity' ? (
            <Form.Item name='camera' label='Camera'>
              <Select placeholder='Select a camera' allowClear>
                <Option
                  onClick={() => setcamera('FHAZ')}
                  key='FHAZ'
                  text='Front Hazard Avoidance Camera'
                  value='FHAZ'
                >
                  Front Hazard Avoidance Camera
                </Option>
                <Option
                  onClick={() => setcamera('RHAZ')}
                  key='RHAZ'
                  text='Rear Hazard Avoidance Camera'
                  value='RHAZ'
                >
                  Rear Hazard Avoidance Camera
                </Option>
                <Option
                  onClick={() => setcamera('MAST')}
                  key='MAST'
                  text='Mast Camera'
                  value='MAST'
                >
                  Mast Camera
                </Option>
                <Option
                  onClick={() => setcamera('CHEMCAM')}
                  key='CHEMCAM'
                  text='Chemistry and Camera Complex'
                  value='CHEMCAM'
                >
                  Chemistry and Camera Complex
                </Option>
                <Option
                  onClick={() => setcamera('MAHLI')}
                  key='MAHLI'
                  text='Mars Hand Lens Imager'
                  value='MAHLI'
                >
                  Mars Hand Lens Imager
                </Option>
                <Option
                  onClick={() => setcamera('MARDI')}
                  key='Mars Descent Imager Imager'
                  value='MARDI'
                >
                  Mars Descent Imager
                </Option>
                <Option
                  onClick={() => setcamera('NAVCAM')}
                  key='NAVCAM'
                  text='Navigation Camera'
                  value='NAVCAM'
                >
                  Navigation Camera
                </Option>
              </Select>
            </Form.Item>
          ) : (
            <Form.Item name='camera' label='Camera'>
              <Select placeholder='Select a camera' allowClear>
                <Option
                  onClick={() => setcamera('FHAZ')}
                  key='FHAZ'
                  text='Front Hazard Avoidance Camera'
                  value='FHAZ'
                >
                  Front Hazard Avoidance Camera
                </Option>
                <Option
                  onClick={() => setcamera('RHAZ')}
                  key='RHAZ'
                  text='Rear Hazard Avoidance Camera'
                  value='RHAZ'
                >
                  Rear Hazard Avoidance Camera
                </Option>
                <Option
                  onClick={() => setcamera('NAVCAM')}
                  key='NAVCAM'
                  text='Navigation Camera'
                  value='NAVCAM'
                >
                  Navigation Camera
                </Option>
                <Option
                  onClick={() => setcamera('PANCAM')}
                  key='PANCAM'
                  text='Panoramic Camera'
                  value='PANCAM'
                >
                  Panoramic Camera
                </Option>
                <Option
                  onClick={() => setcamera('MINITES')}
                  key='MINITES'
                  text='Miniature Thermal Emission Spectrometer (Mini-TES)'
                  value='MINITES'
                >
                  Miniature Thermal Emission Spectrometer (Mini-TES)
                </Option>
              </Select>
            </Form.Item>
          )
        }
      </Form.Item>
      <Form.Item
        name='date'
        label='Date'
        onChange={(e) => setdate(e.target.value)}
      >
        <InputNumber min='1' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
      <Card title='For example:'>
        <p>Robot: Spirit</p>
        <p>Camera: Navigation Camera</p>
        <p>Date 550</p>
      </Card>
    </Form>
  );
}

export default Search;
