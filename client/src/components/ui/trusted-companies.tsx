import { motion } from "framer-motion";

export function TrustedCompanies() {
  return (
    <section className="py-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-b border-blue-700">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <h2 className="text-lg font-semibold text-orange-400 tracking-wide">
              🚀 Trusted by 50+ Companies Worldwide
            </h2>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-blue-200 text-sm mt-2 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, businesses worldwide trust us to deliver exceptional tech talent
          </p>
        </motion.div>
      </div>
    </section>
  );
}