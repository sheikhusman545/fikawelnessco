'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock data for stats
const stats = [
  { name: 'Total Users', value: '1,234', change: '+12%', changeType: 'positive', icon: '👥' },
  { name: 'Total Orders', value: '856', change: '+8%', changeType: 'positive', icon: '📦' },
  { name: 'Revenue', value: '$45,678', change: '+23%', changeType: 'positive', icon: '💰' },
  { name: 'Active Products', value: '24', change: '+2', changeType: 'positive', icon: '🌿' },
]

const recentOrders = [
  { id: '#ORD-001', customer: 'John Doe', product: 'IMMUNE - EUCALYPTUS & CLOVE', amount: '$44.00', status: 'Completed', date: '2024-01-15' },
  { id: '#ORD-002', customer: 'Jane Smith', product: 'RELAX - LAVENDER & CHAMOMILE', amount: '$29.99', status: 'Pending', date: '2024-01-14' },
  { id: '#ORD-003', customer: 'Mike Johnson', product: 'ENERGIZE - PEPPERMINT & LEMON', amount: '$34.99', status: 'Processing', date: '2024-01-14' },
  { id: '#ORD-004', customer: 'Sarah Williams', product: 'BALANCE - ROSEMARY & SAGE', amount: '$39.99', status: 'Completed', date: '2024-01-13' },
  { id: '#ORD-005', customer: 'David Brown', product: 'FOCUS - EUCALYPTUS & MINT', amount: '$27.99', status: 'Cancelled', date: '2024-01-12' },
]

const topProducts = [
  { name: 'IMMUNE - EUCALYPTUS & CLOVE', sales: 145, revenue: '$3,190' },
  { name: 'RELAX - LAVENDER & CHAMOMILE', sales: 128, revenue: '$3,839' },
  { name: 'ENERGIZE - PEPPERMINT & LEMON', sales: 112, revenue: '$3,919' },
  { name: 'BALANCE - ROSEMARY & SAGE', sales: 98, revenue: '$3,919' },
  { name: 'FOCUS - EUCALYPTUS & MINT', sales: 87, revenue: '$2,435' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="mt-2 text-gray-600 text-lg">Welcome back! Here's what's happening with your wellness business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={stat.name} 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-500/20 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  stat.changeType === 'positive' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {stat.change}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 mt-2">from last month</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sales Trend</h3>
          <div className="h-48 relative">
            <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
              {/* Bars */}
              {[45, 52, 38, 65, 58, 72, 55].map((height, i) => (
                <g key={i}>
                  <rect
                    x={i * 40 + 10}
                    y={150 - height}
                    width="30"
                    height={height}
                    fill="url(#barGradient)"
                    rx="4"
                  />
                  <text
                    x={i * 40 + 25}
                    y={150 - height - 5}
                    fontSize="10"
                    fill="#463939"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    {height}
                  </text>
                </g>
              ))}
              <defs>
                <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c6b9b9" />
                  <stop offset="100%" stopColor="#463939" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Last 7 days</p>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Conversion Rate</h3>
          <div className="h-48 flex items-center justify-center relative">
            <svg className="w-32 h-32" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#10b981"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 40 * 0.68} ${2 * Math.PI * 40}`}
                strokeDashoffset={2 * Math.PI * 40 * 0.32}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              <text x="50" y="55" fontSize="20" fill="#1f2937" textAnchor="middle" fontWeight="bold">
                68%
              </text>
            </svg>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Current month</p>
        </div>

        {/* Revenue by Category */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue by Category</h3>
          <div className="space-y-4">
            {[
              { name: 'Essential Oils', value: 45, color: '#463939' },
              { name: 'Wellness Products', value: 30, color: '#c6b9b9' },
              { name: 'Self-Care Kits', value: 25, color: '#f5efef' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  <span className="text-sm font-bold text-gray-900">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts and Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Revenue Overview</h2>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-64 relative">
            {/* Dummy Line Chart */}
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              {/* Grid lines */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#463939" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#463939" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3, 4].map(i => (
                <line key={i} x1="0" y1={40 + i * 40} x2="400" y2={40 + i * 40} stroke="#e5e7eb" strokeWidth="1" />
              ))}
              {/* Area under line */}
              <path
                d="M 0,180 Q 80,120 160,100 T 320,80 T 400,60 L 400,200 L 0,200 Z"
                fill="url(#lineGradient)"
              />
              {/* Line */}
              <path
                d="M 0,180 Q 80,120 160,100 T 320,80 T 400,60"
                fill="none"
                stroke="#463939"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Data points */}
              {[
                { x: 0, y: 180 },
                { x: 80, y: 120 },
                { x: 160, y: 100 },
                { x: 240, y: 90 },
                { x: 320, y: 80 },
                { x: 400, y: 60 },
              ].map((point, i) => (
                <circle key={i} cx={point.x} cy={point.y} r="5" fill="#463939" stroke="white" strokeWidth="2" />
              ))}
              {/* Labels */}
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <text key={i} x={i * 57 + 30} y="195" fontSize="10" fill="#6b7280" textAnchor="middle">
                  {day}
                </text>
              ))}
            </svg>
            {/* Stats overlay */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
              <p className="text-xs text-gray-600">Total Revenue</p>
              <p className="text-lg font-bold text-primary-700">$12,450</p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Top Products</h2>
            <Link href="/dashboard/products" className="text-sm text-primary-700 hover:underline font-medium">
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div 
                key={product.name} 
                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-500/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} sales</p>
                  </div>
                </div>
                <p className="font-bold text-gray-900">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
            <Link href="/dashboard/orders" className="text-sm text-primary-700 hover:underline font-medium">
              View all orders →
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-700 border border-green-200' :
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                      'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Link href={`/dashboard/orders/${order.id}`} className="text-primary-700 hover:text-primary-800 font-medium hover:underline transition-colors">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

