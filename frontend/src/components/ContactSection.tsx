import { motion } from "framer-motion";
import { ArrowRight, Users, Zap } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="relative overflow-hidden bg-white py-24">
            {/* Unified Gradient Background for the whole section */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(148, 163, 184, 0.05) 40%, rgba(71, 85, 105, 0.15) 80%, rgba(30, 41, 59, 0.2) 100%)'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Why Partner With Us Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Partner With Us
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white/40 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 hover:border-[#63c1b3]/30 transition-all duration-300 shadow-sm"
                    >
                        <div className="flex flex-col items-start text-left">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-[#63c1b3]/10 p-3 rounded-xl transition-transform duration-300">
                                    <Zap className="w-6 h-6 text-[#63c1b3]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    The Broadcast Digitally Difference
                                </h3>
                            </div>
                            <p className="text-gray-500 text-base leading-relaxed font-light">
                                What sets us apart from the traditional market is our Vendor-Agnostic Approach. We work with the world's leading OEMs to select the equipment that fits your specific needs and budget, not our bottom line.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white/40 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 hover:border-[#63c1b3]/30 transition-all duration-300 shadow-sm"
                    >
                        <div className="flex flex-col items-start text-left">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-[#63c1b3]/10 p-3 rounded-xl transition-transform duration-300">
                                    <Users className="w-6 h-6 text-[#63c1b3]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    The Team
                                </h3>
                            </div>
                            <p className="text-gray-500 text-base leading-relaxed font-light">
                                Our leadership comprises veterans who have executed pan-regional rollouts for the largest media houses in Asia. With a combined experience of over 50 years in RF, IP, and Satellite engineering, your vision is in safe hands.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section - Centered and clean like in image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/60 backdrop-blur-md rounded-[40px] py-16 px-8 text-center max-w-4xl mx-auto border border-[#63c1b3]/20 shadow-xl shadow-[#63c1b3]/5"
                >
                    <div className="flex flex-col items-center gap-6 mb-8">
                        <div className="flex items-center justify-center gap-3">
                            <Zap className="w-8 h-8 text-[#63c1b3]" />
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Ready to Begin Your <span className="text-[#63c1b3]">Digital Transformation?</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed font-light">
                            Reach out to our engineering team today for a comprehensive infrastructure audit or a new project consultation.
                        </p>
                    </div>

                    <a
                        href="mailto:contact@broadcastdigitally.com"
                        className="inline-flex items-center gap-2 font-medium text-white bg-[#63c1b3] hover:bg-[#4a9d8f] transition-all px-8 py-3.5 rounded-xl shadow-lg shadow-[#63c1b3]/20 group"
                    >
                        Get Started Today
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
