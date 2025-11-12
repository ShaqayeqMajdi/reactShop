import { useEffect, useState } from "react";
import api from "../../configs/api";
import Error from "../../shared/error/Error";
import Loading from "../../shared/loading/Loading";

export default function AdminPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api.get("products")
      .then((response) => setProducts(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative flex gap-8 container mx-auto font-Quicksand selection:bg-Cultured mb-6">
      <button onClick={() => setMenuOpen(true)}
        className="lg:hidden absolute right-10 top-5 cursor-pointer w-9 h-9 flex items-center justify-center p-4 bg-gray-200 text-gray-700 rounded-full m-4 z-50">
        <i className="fa-solid fa-bars"></i>
      </button>
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/30 z-40 lg:hidden"></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static top-0 left-0 h-full w-72 bg-white border-r-2 border-gray-100 flex-col transition-transform duration-500 z-50
          ${menuOpen ? "translate-x-0 flex" : "-translate-x-full hidden"} lg:translate-x-0 lg:flex`}>
        <div className="flex justify-end lg:hidden p-4">
          <button onClick={() => setMenuOpen(false)} className="text-gray-600 text-xl cursor-pointer">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="p-4 space-y-4">
          <a href="#"
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-gauge-high text-lg text-gray-600"></i>
              <span>Dashboard</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
          <a href="#"
            className="flex items-center justify-between p-4 rounded-2xl bg-gray-100 font-medium transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-box text-lg text-gray-600"></i>
              <span>Products</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
          <a href="#"
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-shopping-cart text-lg text-gray-600"></i>
              <span>Orders</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                12
              </span>
              <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
            </div>
          </a>
          <a href="#"
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-users text-lg text-gray-600"></i>
              <span>Customers</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
          <a href="#"
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-chart-line text-lg text-gray-600"></i>
              <span>Analytics</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
          <a href="#"
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-gear text-lg text-gray-600"></i>
              <span>Settings</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
          <h2 className="text-gray-700 text-3xl font-bold mb-3">Product Management</h2>
          <button onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-xl shadow-md hover:shadow-gray-500/50
            transition transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base">
            + Add New Product
          </button>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-gray-50 rounded-2xl shadow-2xl w-full  h-[550px] max-w-xl overflow-y-auto animate-in fade-in zoom-in duration-300">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800">Add New Product</h3>
                <button onClick={() => setModalOpen(false)}
                  className="p-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              {/* Form */}
              <form className="p-6 space-y-6">
                {/* Image Upload */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3"></label>
                  <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-Cultured  hover:shadow-lg transition-all duration-300 shadow-md">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-2">
                      <div className="p-3 bg-white/70 rounded-full shadow-inner">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">
                        <span className="underline decoration-gray-500">Click to upload</span>
                        or drag & drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400/50 
                  focus:border-transparent outline-none transition-all" placeholder="Enter product name"/>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea rows={4} required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400/50 
                  focus:border-transparent outline-none transition-all resize-none" placeholder="Describe your product..."></textarea>
                </div>

                {/* Price & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                    <input type="number" step="0.01" min="0" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-gray-400/50 focus:border-transparent outline-none transition-all" placeholder="29.99"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400/50 
                    focus:border-transparent outline-none transition-all">
                      <option value="">Select category</option>
                      <option>Electronics</option>
                      <option>Jewelry</option>
                      <option>Men</option>
                      <option>Women</option>
                    </select>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                  <button type="button" onClick={() => setModalOpen(false)} 
                  className="px-5 py-2.5  text-gray-700 bg-Cultured rounded-lg hover:shadow-md duration-500 font-medium cursor-pointer">
                    Cancel
                  </button>
                  <button type="submit" onClick={(evt) => {evt.preventDefault(); setModalOpen(false);}}
                    className="px-4 py-2.5 text-gray-700 bg-Cultured rounded-lg hover:shadow-md duration-500 font-semibold cursor-pointer text-sm">
                    + Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
          <table className="w-full text-sm text-left min-w-[600px] ">
            <thead className="bg-Cultured text-gray-600 uppercase text-xs sm:text-xs font-semibold tracking-wider">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3 text-center">Price</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-10">
                    <Loading />
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="6" className="text-center py-10">
                    <Error />
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr>
                    <td className="px-4 py-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm p-1">
                        <img src={product.image} alt={product.title} className="w-full h-full object-contain"/>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-800">{product.title}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-[120px] sm:max-w-xs">
                      <p className="line-clamp-1">{product.description}</p>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 font-bold rounded-full text-xs sm:text-sm">${product.price}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs font-medium">{product.category}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button className="group relative p-2 sm:p-3 bg-Cultured cursor-pointer text-gray-500 rounded-xl hover:shadow-md duration-500">
                          <i className="fa-solid fa-pen-to-square text-sm"></i>
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 
                          group-hover:opacity-100 transition-opacity duration-500">
                            Edit
                          </span>
                        </button>
                        <button className="group relative p-2 sm:p-3 bg-Cultured cursor-pointer text-gray-500 rounded-xl hover:shadow-md duration-500">
                          <i className="fa-solid fa-trash text-sm"></i>
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 
                          group-hover:opacity-100 transition-opacity duration-500">
                            Delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
