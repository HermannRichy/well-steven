import { Headset, Bell, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="py-20 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Côté Gauche - Texte */}
      <div>
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-4">Contactez-nous</p>
        <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
          Restons en contact ! Nous sommes là pour sécuriser vos obligations et développer vos compétences.
        </h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          WELL STEVEN SARL vous accompagne avec des services comptables et fiscaux fiables, ainsi que des formations professionnelles adaptées à vos besoins.
        </p>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gray-50 rounded-lg"><Headset className="text-slate-800" size={24} /></div>
            <div>
              <p className="font-semibold">Assistance professionnelle</p>
              <p className="text-sm text-gray-500 mt-2">
                Accompagnement personnalisé pour vos obligations comptables, fiscales et administratives.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
            <div className="p-2 bg-gray-50 rounded-lg"><Bell className="text-slate-800" size={24} /></div>
            <div><p className="font-semibold">Disponibilité et réactivité</p></div>
          </div>

          <div className="flex flex-wrap gap-8 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={18} className="text-gray-400" />
              <span>wellservicefiscale@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={18} className="text-gray-400" />
              <span>01 90 47 95 12 / 01 47 36 13 47</span>
            </div>
          </div>
        </div>
      </div>

      {/* Côté Droit - Formulaire */}
      <div className="bg-[#0a192f] p-8 md:p-12 rounded-lg shadow-2xl">
        <h3 className="text-white text-2xl font-bold mb-8">Envoyez-nous un message</h3>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Nom et prénom" 
            className="w-full bg-transparent border border-gray-700 rounded-full py-4 px-6 text-white focus:outline-none focus:border-[#f9a44e]"
          />
          <input 
            type="email" 
            placeholder="Votre adresse e-mail" 
            className="w-full bg-transparent border border-gray-700 rounded-full py-4 px-6 text-white focus:outline-none focus:border-[#f9a44e]"
          />
          <input 
            type="tel" 
            placeholder="Numéro de téléphone" 
            className="w-full bg-transparent border border-gray-700 rounded-full py-4 px-6 text-white focus:outline-none focus:border-[#f9a44e]"
          />
          <textarea 
            placeholder="Votre message" 
            rows={4}
            className="w-full bg-transparent border border-gray-700 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#f9a44e]"
          ></textarea>
          <button className="w-full bg-[#f9a44e] hover:bg-[#e8933d] text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all mt-4">
            Envoyer un message <ArrowUpRight size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}