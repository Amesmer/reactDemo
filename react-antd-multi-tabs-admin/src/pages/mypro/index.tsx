import React, { useEffect, FC, useState } from 'react'
import { withRouter } from 'react-router-dom';
import styles from './myPro.module.less'
import './css/todos-base.less'
import './css/todos-index.less'
import type { DataNode, TreeProps } from 'antd/es/tree';
import { Tree } from 'antd';
import { TodoHeader } from './TodoHeader'
import { TodoList } from './TodoList'
const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

const TreeCom: FC = () => {
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
}
const MyPropage: FC = () => {
  const [count, setcount] = useState<number>(0)
  useEffect(() => {
    console.log('count effect');

  }, [count])
  let btnClick = () => {
    setcount(count => count + 1)
  }
  return (
    <div className={styles.container}>
      <h5>this is mypage</h5>
      <p>{count}</p>
      <button className={styles.mybtn} onClick={btnClick}>+1</button>
      <div className={styles.treeCon}>
        <TreeCom />
      </div>
      <div className='todoContainer'>
        <TodoHeader></TodoHeader>
        <TodoList></TodoList>
      </div>

    </div>
  )
}


export default withRouter(MyPropage) 