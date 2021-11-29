import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
      <Button style={{marginLeft:"45%" }} type="primary" shape="round" ref={buttonRef}
      onClick={showModal} icon={<ArrowRightOutlined />} size='large' danger>
         Rejoignez nous </Button>
     
  );
};
export default Trigger;
