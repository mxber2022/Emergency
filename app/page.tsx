"use client"

import Map from '@/components/Map/Map';
import { MapProvider } from '@/components/Map/MapContext';
import { AlertTriangle } from 'lucide-react';
import { SignIn } from "@/components/SignIn";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();
  console.log("Session data: ", session);
  return (
    session?
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 md:px-4 md:py-8">
        <div className="max-w-3xl mx-auto mb-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-2" onClick={() => signOut()} >
            <AlertTriangle className="w-4 h-4" />
            Emergency Services
          </div>
          {/* <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-destructive via-destructive/80 to-destructive/60 text-transparent bg-clip-text">
            Emergency Map
          </h1> */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Quickly mark and share emergency locations. Use your current location to mark emergency spots for immediate assistance.
          </p>

          {/* <button onClick={() => signOut()} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
            Sign Out
          </button> */}
        </div>
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-destructive/30 via-destructive/20 to-destructive/30 rounded-2xl blur-2xl opacity-50"></div>
          <div className="relative">
            <MapProvider>
              <Map />
            </MapProvider>
          </div>
        </div>
      </div>
    </div>
    :
    
    <SignIn/>
  );
}