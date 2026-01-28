import { motion } from "framer-motion";
import { ArrowRight, Users, Zap } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="relative overflow-hidden">
            {/* Why Partner With Us - White Background */}
            <div className="bg-white pt-24 pb-12">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Partner With Us
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#63c1b3]/50 transition-all duration-300 hover:bg-gray-100/50 cursor-pointer"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="bg-[#63c1b3]/15 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-teal-500/20">
                                    <Zap className="w-8 h-8 text-[#63c1b3]" />
                                </div>
                                The Broadcast Digitally Difference
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-light">
                                What sets us apart from the traditional market is our Vendor-Agnostic Approach. We work with the world's leading OEMs to select the equipment that fits your specific needs and budget, not our bottom line.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-100/50 rounded-2xl p-8 border border-[#63c1b3]/50"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-[#63c1b3]/10 p-2 rounded-lg scale-110">
                                    <Users className="w-8 h-8 text-[#63c1b3]" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 font-sans">The Team</h3>
                            </div>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                                Our leadership comprises veterans who have executed pan-regional rollouts for the largest media houses in Asia. With a combined experience of over 50 years in RF, IP, and Satellite engineering, your vision is in safe hands.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-5 py-2.5 bg-white rounded-lg text-[#63c1b3] font-bold border border-[#63c1b3]/50">50+ Years Experience</div>
                                <div className="px-5 py-2.5 bg-white rounded-lg text-[#63c1b3] font-bold border border-[#63c1b3]/50">Pan-Regional Rollouts</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* CTA Section - White Background */}
            <div className="bg-white pt-4 pb-24">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-gray-50 rounded-3xl py-12 px-6 text-center border border-gray-100 max-w-5xl mx-auto hover:border-[#63c1b3]/30 transition-all duration-300 hover:bg-gray-100/50 cursor-pointer"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                            <Zap className="w-10 h-10 md:w-12 md:h-12 text-[#63c1b3] group-hover:scale-110 transition-transform duration-300" />
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 max-w-4xl leading-tight text-center md:text-left">
                                Ready to Begin Your <span className="text-[#63c1b3]">Digital Transformation?</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-light font-sans">
                            Reach out to our engineering team today for a comprehensive infrastructure audit or a new project consultation.
                        </p>
                        <button
                            className="text-gray-900 hover:text-[#63c1b3] transition-all flex items-center gap-3 mx-auto font-medium text-lg group"
                            onClick={() => window.location.href = 'mailto:contact@broadcastdigitally.com'}
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
