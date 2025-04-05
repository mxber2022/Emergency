import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('locations')
      .select('*');

    if (error) {
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch locations' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { walletAddress, lat, lng, emergencyInfo } = body;

    if (!walletAddress || typeof lat !== 'number' || typeof lng !== 'number') {
      return NextResponse.json(
        { error: 'Wallet address, latitude, and longitude are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('locations')
      .insert([{
        wallet_address: walletAddress,
        lat,
        lng,
        emergency_info: emergencyInfo
      }])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save location' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const { error } = await supabase
      .from('locations')
      .delete()
      .neq('id', ''); // Delete all records

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: 'All locations cleared' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to clear locations' },
      { status: 500 }
    );
  }
}