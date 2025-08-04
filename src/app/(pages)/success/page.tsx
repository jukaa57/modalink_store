"use client"
import Link from "next/link";
import { IconCircleCheck} from '@tabler/icons-react'
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Page() {

  return (
    <div className=" min-h-screen relative flex items-center justify-center ">
      <div className="bg-muted p-8 rounded-lg shadow-md max-w-md w-full text-center ">
        <IconCircleCheck className="h-16 w-16 text-green-500 mx-auto mb-4" />

        <Text type="title" className="text-2xl mb-2">Thank you for your purchase!</Text>

        <Text className="text-gray-600 mb-6">
          Your order has been placed successfully. We’ve sent you a confirmation email with the details.
        </Text>

        <div className="bg-background p-4 rounded-md mb-6 text-left text-sm">
          <Text ><span className="font-medium text-sm">Order ID:</span> #123456789</Text>
          <Text ><span className="font-medium text-sm">Estimated Delivery:</span> August 12–16, 2025</Text>
        </div>

        <Link href="/" >
          <Button>
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};