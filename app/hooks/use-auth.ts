'use client';

/**
 * Auth hook placeholder: connect to auth provider later.
 */
export function useAuth() {
  return {
    user: {
      name: 'Nafisa Rahman',
      email: 'nafisa@example.com',
      avatar: 'NR'
    },
    isAuthenticated: true,
    signIn: async () => Promise.resolve(),
    signOut: async () => Promise.resolve()
  };
}
