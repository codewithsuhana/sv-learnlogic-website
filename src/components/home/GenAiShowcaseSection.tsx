import React from "react";
import Link from "next/link";
import { Bot, Sparkles, Cpu, Database, Network, ArrowRight, Zap, Code } from "lucide-react";

export function GenAiShowcaseSection() {
  const pillars = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: "Autonomous AI Agents",
      desc: "ReAct loops, programmatic tool invocation, memory management, and multi-agent systems.",
    },
    {
      icon: <Database className="w-6 h-6 text-sky-400" />,
      title: "Production RAG Pipelines",
      desc: "Vector databases (ChromaDB, Pinecone), hybrid search, re-ranking, and proprietary document chunking.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Foundational LLM Orchestration",
      desc: "LangChain, LCEL, structured JSON schemas, prompt engineering, and context window optimization.",
    },
    {
      icon: <Network className="w-6 h-6 text-purple-400" />,
      title: "Intelligent Applications",
      desc: "Bridging predictive machine learning with modern software engineering for next-gen products.",
    },
  ];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            The Frontier of Modern Computing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Generative AI & Emerging Technologies
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Move beyond simple prompt usage. SV LearnLogic prepares software engineers to build,
            architect, and deploy autonomous AI agents, semantic retrieval engines, and intelligent software.
          </p>
        </div>

        {/* Visual Architecture & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-16">
          
          {/* Left Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Architecture Illustration */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-navy-900/90 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>Agentic AI Stack Blueprint</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Architecture
                </span>
              </div>

              {/* Architecture Flow Diagram */}
              <div className="space-y-3 font-mono text-xs">
                {/* User Input */}
                <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-between text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">01.</span>
                    <span>Query & Intent Classification</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Input Layer</span>
                </div>

                {/* Routing & RAG */}
                <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-between text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 font-bold">02.</span>
                    <span>Vector DB Hybrid Retrieval (RAG)</span>
                  </div>
                  <span className="text-[10px] text-sky-400">Context Window</span>
                </div>

                {/* Reasoning Agent */}
                <div className="p-3.5 rounded-xl bg-navy-850 border border-cyan-500/50 flex items-center justify-between text-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="font-semibold text-cyan-300">03. Autonomous ReAct Agent Loop</span>
                  </div>
                  <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded">
                    Tool Execution
                  </span>
                </div>

                {/* Structured Output */}
                <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-between text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400 font-bold">04.</span>
                    <span>Guaranteed Structured JSON / API Output</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">Validated</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-navy-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Full hands-on implementation in our GenAI Program
                </span>
                <Link
                  href="/programs/generative-ai"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  Explore GenAI Track <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
