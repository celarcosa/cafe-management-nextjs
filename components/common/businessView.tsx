import ProductCatalog from "@/components/products/productCatalog";

export default function BusinessView(props?: any) {
    return (
        <div>
            <div className="flex items-center">
                <div className="avatar">
                    <div className="w-32 rounded h-auto">
                        <img
                            src="https://www.pngplay.com/wp-content/uploads/8/Starbucks-Coffee-Logo-PNG-HD-Quality.png"/>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold ml-2">Starbucks</h1>
                    <a href="" className="ml-2">http://starbucks.com</a>
                    <div className="text-sm text-gray-400 ml-2">Food & Beverage</div>

                    <p className="text-xs text-gray-400 ml-2 mt-2 line-clamp-3">A coffee beverage that combines espresso, steamed milk, vanilla syrup, and caramel sauce,
                        typically served hot or iced
                        milk.</p>
                </div>
            </div>
            <div className="divider text-xs uppercase font-semibold text-gray-400">Products</div>
        </div>
    )
}