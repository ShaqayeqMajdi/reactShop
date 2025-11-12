import { Modal, Box } from "@mui/material";

export default function AddProductModal({open,onClose, register, handleSubmit, onSubmit}) {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Box className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-50 rounded-2xl shadow-2xl w-full max-w-xl h-[550px] overflow-y-auto animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800">Add New Product</h3>
            <button onClick={onClose} className="p-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            {/* Image */}
            <div className="group">
              <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-Cultured  
              hover:shadow-lg transition-all duration-300 shadow-md">
                <p className="text-sm text-gray-700 font-medium mt-20">Click to upload or drag & drop</p>
                <input type="file" {...register("image")} className="hidden" />
              </label>
            </div>

            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input type="text" {...register("title")} required placeholder="Enter product name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400/50 focus:border-transparent outline-none transition-all"/>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea {...register("description")} rows={4} required placeholder="Describe your product..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 
                focus:ring-gray-400/50 focus:border-transparent outline-none transition-all resize-none"/>
            </div>

            {/* Price & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                <input type="number"  {...register("price")} required placeholder="29.99"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400/50 focus:border-transparent outline-none transition-all"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select {...register("category")} required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400/50 focus:border-transparent outline-none transition-all">
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
              <button type="button" onClick={onClose} className="px-5 py-2.5 text-gray-700 bg-Cultured rounded-lg hover:shadow-md duration-500 font-medium cursor-pointer">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2.5 text-gray-700 bg-Cultured rounded-lg hover:shadow-md duration-500 font-semibold cursor-pointer text-sm">
                + Add Product
              </button>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
}
