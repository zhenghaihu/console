/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */
module.exports = {
  // Edit Quotas
  EDIT_QUOTAS: '编辑配额',
  QUOTA: '配额',
  NUMBER_OF_VOLUMES: '存储卷数量',
  PROJECT_QUOTAS_NOT_SET: '项目配额未设置',
  PROJECT_QUOTAS_DESC: '项目配额用于指定项目中可用的 CPU 和内存资源数量和容器组、部署、服务等应用资源的最大数量。',
  DEFAULT_CONTAINER_QUOTAS_NOT_SET: '默认容器配额未设置',
  DEFAULT_CONTAINER_QUOTAS_DESC: '默认容器配额用于指定项目中创建的容器的默认 CPU 预留、CPU 限制、内存预留和内存限制。',
  PROJECT_RESOURCE_QUOTAS: '项目资源配额',
  SELECT_RESOURCE_TIP: '请选择资源或输入资源名称',
  NUMBER_OF_ROUTES: '应用路由数量',
  NUMBER_OF_SECRETS: '保密字典数量',
  NUMBER_OF_CONFIGMAPS: '配置字典数量',
  NUMBER_OF_DAEMONSETS: '守护进程集数量',
  NUMBER_OF_STATEFULSETS: '有状态副本集数量',
  NUMBER_OF_DEPLOYMENTS: '部署数量',
  // Resource Status
  RESOURCE_STATUS: '资源状态',
  // Resource Status > Application Resources
  RESOURCE_WARNING_TIPS: '异常{tipName}：{warnNum}',
  // Resource Status > Physical Resources
  PHYSICAL_RESOURCE_PL: '物理资源',
  CPU_USAGE_TIME: 'CPU 用量（{time}）',
  MEMORY_USAGE_TIME: '内存用量（{time}）',
  // Tips
  TIPS: '帮助信息',
  HOW_TO_INVITE_USERS: '如何邀请用户到当前项目中？',
  HOW_TO_SET_PROJECT_GATEWAY: '如何设置项目网关？',
  // Top 5 for Resource Usage
  TOP_5_FOR_RSC_USAGE: '资源用量 Top 5',
  TOP_5_FOR_RESOURCE_USAGE: '资源用量 Top 5',
  SORT_BY_WORKLOAD_CPU_USAGE: '按 CPU 用量排行',
  SORT_BY_WORKLOAD_MEMORY_USAGE_WO_CACHE: '按内存用量排行',
  SORT_BY_WORKLOAD_NET_BYTES_TRANSMITTED: '按出站流量排行',
  SORT_BY_WORKLOAD_NET_BYTES_RECEIVED: '按入站流量排行'
};