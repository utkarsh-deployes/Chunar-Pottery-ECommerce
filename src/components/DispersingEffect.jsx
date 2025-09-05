import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleSystem = () => {
  const particlesRef = useRef();
  const particleCount = 10000; // Increased for full coverage

  useEffect(() => {
    if (particlesRef.current) {
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Distribute particles across the entire screen
        positions[i3] = -2 - Math.random(); // Start completely off the left screen
        positions[i3 + 1] = (Math.random() - 0.5) * 6; // Full vertical range
        positions[i3 + 2] = (Math.random() - 0.5) * 6; // Random depth for 3D effect

        // Velocities for diagonal blowing effect
        velocities[i3] = Math.random() * 0.02 + 0.01; // Move towards the right
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.02; // Vertical motion
        velocities[i3 + 2] = 0; // Minimal depth motion
      }

      particlesRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      particlesRef.current.geometry.userData.velocities = velocities;
    }
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const velocities = particlesRef.current.geometry.userData.velocities;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Update particle positions
        positions[i3] += velocities[i3]; // Horizontal motion (to the right)
        positions[i3 + 1] += velocities[i3 + 1]; // Vertical motion
        positions[i3 + 2] += velocities[i3 + 2]; // Depth motion

        // Reset particles that move off the screen
        if (positions[i3] > 3 || positions[i3 + 1] > 3 || positions[i3 + 1] < -3) {
          positions[i3] = -2 - Math.random(); // Reset to the left
          positions[i3 + 1] = (Math.random() - 0.5) * 6; // Random vertical position
          positions[i3 + 2] = (Math.random() - 0.5) * 6; // Random depth
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.08} // Adjust size for realism
        color="#8B4513" // Mud color
        transparent
        opacity={0.9} // Slight transparency for natural effect
      />
    </points>
  );
};

const DispersingEffect = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Play animation only on page reload
    const container = containerRef.current;
    container.style.display = "block";

    const timeout = setTimeout(() => {
      container.style.display = "none"; // Remove the effect after animation ends
    }, 4000); // Animation duration in ms

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999, // Ensure it's above all other content
        pointerEvents: "none", // Allow interaction with other elements
      }}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
        <ambientLight />
        <ParticleSystem />
      </Canvas>
    </div>
  );
};

export default DispersingEffect;
