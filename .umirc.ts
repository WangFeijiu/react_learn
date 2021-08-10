/*
 * @Author: your name
 * @Date: 2021-08-02 14:45:10
 * @LastEditTime: 2021-08-06 14:37:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_learn\.umirc.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
