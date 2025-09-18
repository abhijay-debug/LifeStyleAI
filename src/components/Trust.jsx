import React from "react";

export default function Trust() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-semibold mb-6">
          Trusted by emerging and established brands
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-3xl mx-auto">
          <img src="https://dummyimage.com/100x40/ccc/fff&text=Logo+1" alt="Client logo" className="h-10 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"/>
          <img src="https://dummyimage.com/100x40/ccc/fff&text=Logo+2" alt="Client logo" className="h-10 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"/>
          <img src="https://dummyimage.com/100x40/ccc/fff&text=Logo+3" alt="Client logo" className="h-10 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"/>
          <img src="https://dummyimage.com/100x40/ccc/fff&text=Logo+4" alt="Client logo" className="h-10 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"/>
        </div>
      </div>
    </section>
  );
}
