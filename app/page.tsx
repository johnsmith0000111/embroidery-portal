"use client";
import { motion } from "framer-motion";
import { Upload, Package, CheckCircle, Clock, Download } from "lucide-react";

export default function Dashboard() {
  const orders = [
    { id: "ORD-001", name: "Nike Left Chest", status: "Completed", file: ".DST" },
    { id: "ORD-002", name: "Floral Back Design", status: "In Progress", file: "-" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-black tracking-tighter text-indigo-700">DIGITIZE PRO</h1>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border text-sm font-medium">
            Client: <span className="text-indigo-600 font-bold">Aapka Naam</span>
          </div>
        </nav>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <Clock className="text-orange-500 mb-2" />
            <p className="text-slate-500 text-sm">Active Orders</p>
            <h2 className="text-3xl font-bold">02</h2>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <CheckCircle className="text-green-500 mb-2" />
            <p className="text-slate-500 text-sm">Completed</p>
            <h2 className="text-3xl font-bold">45</h2>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <Package className="text-blue-500 mb-2" />
            <p className="text-slate-500 text-sm">Order Slips</p>
            <h2 className="text-3xl font-bold">47</h2>
          </div>
        </div>

        {/* Main Content: Upload & Tracking */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Upload Box */}
          <motion.div whileHover={{ scale: 1.01 }} className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-dashed border-indigo-100 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
              <Upload className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">Send New Design</h3>
            <p className="text-slate-400 text-sm mb-6">Upload JPG/PNG for professional digitizing</p>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
              Select Design File
            </button>
          </motion.div>

          {/* Tracking List */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-6 text-slate-800">Order Tracking</h3>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <p className="font-bold text-slate-700 text-sm">{order.name}</p>
                    <p className="text-xs text-slate-400">{order.id}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${order.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {order.status}
                    </span>
                    {order.status === 'Completed' && <Download className="text-indigo-600 cursor-pointer" size={18} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}