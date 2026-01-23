import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Handshake, Users, Zap } from "lucide-react";
import { Button } from "../components/ui/button";

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Why Partner With Us */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                            Why Partner With Us
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                            The Broadcast Digitally <span className="text-primary">Difference</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            What sets us apart from the traditional market is our Vendor-Agnostic Approach. We work with the world's leading OEMs to select the equipment that fits your specific needs and budget—not our bottom line.
                        </p>

                        <div className="grid gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <div className="flex items-center gap-4 mb-3">
                                    <Handshake className="w-8 h-8 text-primary" />
                                    <h3 className="text-xl font-bold text-white">Vendor-Agnostic</h3>
                                </div>
                                <p className="text-gray-400">Unbiased recommendations tailored to your goals.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 rounded-2xl p-8 border border-white/10"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <Users className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-white">The Team</h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Our leadership comprises veterans who have executed pan-regional rollouts for the largest media houses in Asia. With a combined experience of over 50 years in RF, IP, and Satellite engineering, your vision is in safe hands.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-primary/20 rounded-lg text-primary font-bold">50+ Years Experience</div>
                            <div className="px-4 py-2 bg-primary/20 rounded-lg text-primary font-bold">Pan-Regional Rollouts</div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-3xl p-12 text-center border border-primary/20 mb-24"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Zap className="w-12 h-12 text-primary" />
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Ready to Begin Your Digital Transformation?
                        </h2>
                    </div>
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
                        Reach out to our engineering team today for a comprehensive infrastructure audit or a new project consultation.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
                        Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>

                {/* Contact Details */}
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <MapPin className="w-8 h-8 text-primary" />
                            <h3 className="text-lg font-bold text-white">Office Address</h3>
                        </div>
                        <p className="text-gray-400">123 Media Tech Park,<br />Innovation District, NY 10001</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Phone className="w-8 h-8 text-primary" />
                            <h3 className="text-lg font-bold text-white">Direct Line</h3>
                        </div>
                        <p className="text-gray-400">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Mail className="w-8 h-8 text-primary" />
                            <h3 className="text-lg font-bold text-white">Email</h3>
                        </div>
                        <p className="text-gray-400">contact@broadcastdigitally.com<br />support@broadcastdigitally.com</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
