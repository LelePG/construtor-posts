"use client";
import { EventoProvider } from "@/data/context/EventoContext";

export default function Layout({ children }: { children: React.ReactNode }) {
	return <EventoProvider>{children}</EventoProvider>;
}
