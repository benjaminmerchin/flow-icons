import React from 'react';

/**
 * Base props interface for Flow Icon components
 */
export interface FlowIconBaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Props interface for Flow Icon components with filled variant support
 */
export interface FlowIconProps extends FlowIconBaseProps {
  filled?: boolean;
}

/**
 * Props interface for outline/filled variants (no filled prop)
 */
export interface FlowIconVariantProps extends FlowIconBaseProps {}

/**
 * Type definition for main Flow Icon components (supports filled prop)
 * Compatible with React.ComponentType and can be used for props and refs
 */
export type FlowIcon = React.ComponentType<FlowIconProps>;

/**
 * Type definition for Flow Icon variant components (outline/filled specific)
 */
export type FlowIconVariant = React.ComponentType<FlowIconVariantProps>;