"use client";

import {
  Card as UICard,
  CardHeader as UICardHeader,
  CardFooter as UICardFooter,
  CardTitle as UICardTitle,
  CardDescription as UICardDescription,
  CardContent as UICardContent
} from '@/components/ui/card';

// These components are just re-exporting the existing Card components from UI library
// to make it easier to import in our Note application.
export {
  UICard as Card,
  UICardHeader as CardHeader,
  UICardFooter as CardFooter,
  UICardTitle as CardTitle,
  UICardDescription as CardDescription,
  UICardContent as CardContent
};
