import { Check, ArrowUpRight } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">OUR BENEFIT</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Accounting made simple, growth made possible
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer faucibus erat dolor, at dictum arcu.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-1 rounded h-fit"><Check size={16} className="text-blue-900"/></div>
              <div>
                <h4 className="font-bold">Accurate financial management</h4>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet u eget interdum metus.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-100 p-1 rounded h-fit"><Check size={16} className="text-blue-900"/></div>
              <div>
                <h4 className="font-bold">Maximized investment returns</h4>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet u eget interdum metus.</p>
              </div>
            </div>
          </div>

          <button className="bg-orange-400 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-500 transition font-medium">
            Schedule a consultation <ArrowUpRight size={18}/>
          </button>
        </div>

        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Workplace"
          />
        </div>
      </div>
    </section>
  );
}