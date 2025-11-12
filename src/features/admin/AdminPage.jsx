import { useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import useDeleteProduct from "../../hooks/useDeleteProduct";
import Loading from "../../shared/loading/Loading";
import Error from "../../shared/error/Error";
import DeleteModal from "./components/DeleteModal";
import { useForm } from "react-hook-form";
import useEditProduct from "../../hooks/useEditProduct";
import EditModal from "./components/EditModal";

export default function AdminPage() {
  const { data, isLoading, isError } = useGetProducts();
  const { mutateAsync } = useDeleteProduct();
  const { mutateAsync: editProduct } = useEditProduct();
  const [menuOpen, setMenuOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: 0, title: "",
      description: "", image: "",
      price: 0, category: "",
    },
  });

  function editItem(product) {
    reset({
      id: product.id, title: product.title,
      description: product.description, image: product.image,
      price: product.price, category: product.category,
    });
    setEditModal(true);
  }

  function editSubmit(formData) {
    editProduct(formData);
    console.log(formData);
    setEditModal(false);
  }

  async function deleteItem(product) {
    await mutateAsync(product.id);
  }

  return (
    <div className="relative flex gap-8 container mx-auto font-Quicksand selection:bg-Cultured mb-6">
      <button onClick={() => setMenuOpen(true)} className="lg:hidden absolute right-10 top-5 cursor-pointer w-9 h-9 
      flex items-center justify-center p-4 bg-gray-200 text-gray-700 rounded-full m-4 z-50">
        <i className="fa-solid fa-bars"></i>
      </button>
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/30 z-40 lg:hidden"></div>)}
      <aside className={`fixed lg:static top-0 left-0 h-full w-72 bg-white border-r-2 border-gray-100 flex-col transition-transform duration-500 z-50
          ${menuOpen ? "translate-x-0 flex" : "-translate-x-full hidden"} lg:translate-x-0 lg:flex`}>
        <div className="flex justify-end lg:hidden p-4">
          <button onClick={() => setMenuOpen(false)} className="text-gray-600 text-xl cursor-pointer">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="p-4 space-y-4">
          <a href="#" className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium 
          transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-gauge-high text-lg text-gray-600"></i>
              <span>Dashboard</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
          <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-gray-100 font-medium 
          transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-box text-lg text-gray-600"></i>
              <span>Products</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
          <a href="#" className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium 
          transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-shopping-cart text-lg text-gray-600"></i>
              <span>Orders</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">12</span>
              <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
            </div>
          </a>
          <a href="#" className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium 
          transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-users text-lg text-gray-600"></i>
              <span>Customers</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
          <a href="#" className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium 
          transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-chart-line text-lg text-gray-600"></i>
              <span>Analytics</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
          <a href="#" className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 font-medium 
          transition-all duration-500 group border-b-2 shadow-sm border-gray-200">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-gear text-lg text-gray-600"></i>
              <span>Settings</span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-4 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
          <h2 className="text-gray-700 text-3xl font-bold mb-3"> Product Management</h2>
          <button onClick={() => {}} className="px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-xl shadow-md hover:shadow-gray-500/50
            transition transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base">
            + Add New Product
          </button>
        </div>

        {deleteModal && (<DeleteModal closeModal={() => setDeleteModal(false)} />)}

        <EditModal editModal={editModal} 
        setEditModal={setEditModal} register={register} 
          handleSubmit={handleSubmit} editSubmit={editSubmit}/>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
          <table className="w-full text-sm text-left min-w-[600px] ">
            <thead className="bg-Cultured text-gray-600 uppercase text-xs sm:text-xs font-semibold tracking-wider">
              <tr>
                <th className="px-4 py-3">Id</th>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3 text-center">Price</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="text-center py-10">
                    <Loading />
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan="6" className="text-center py-10">
                    <Error />
                  </td>
                </tr>
              ) : (
                data.data?.map((product) => (
                  <tr>
                    <td className="p-2">
                      <div className="flex items-center justify-center">
                        <span>{product.id}</span>
                      </div>
                    </td>
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
                        <button onClick={() => editItem(product)} className="group relative p-2 sm:p-3 bg-Cultured cursor-pointer text-indigo-600 
                        rounded-xl hover:shadow-md duration-500 hover:bg-indigo-50 transition-colors">
                          <i className="fa-solid fa-pen-to-square text-sm"></i>
                        </button>
                        <button onClick={() => { setDeleteModal(true); deleteItem(product);}}
                          className="group relative p-2 sm:p-3 bg-Cultured cursor-pointer text-red-500 rounded-xl hover:shadow-md duration-500 hover:bg-red-50">
                          <i className="fa-solid fa-trash text-sm"></i>
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
